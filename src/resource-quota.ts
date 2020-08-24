// https://www.terraform.io/docs/providers/kubernetes/r/resource_quota.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ResourceQuotaConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: ResourceQuotaMetadata[];
  /** spec block */
  readonly spec?: ResourceQuotaSpec[];
  /** timeouts block */
  readonly timeouts?: ResourceQuotaTimeouts;
}
export interface ResourceQuotaMetadata {
  /** An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the resource quota, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the resource quota must be unique. */
  readonly namespace?: string;
}
export interface ResourceQuotaSpec {
  /** The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota */
  readonly hard?: { [key: string]: string };
  /** A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. */
  readonly scopes?: string[];
}
export interface ResourceQuotaTimeouts {
  readonly create?: string;
  readonly update?: string;
}

// Resource

export class ResourceQuota extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ResourceQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_resource_quota',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ResourceQuotaMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: ResourceQuotaMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: ResourceQuotaSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: ResourceQuotaSpec[] | undefined) {
    this._spec = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ResourceQuotaTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ResourceQuotaTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      spec: this._spec,
      timeouts: this._timeouts,
    };
  }
}
