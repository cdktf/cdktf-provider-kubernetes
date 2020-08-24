// https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CsiDriverConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: CsiDriverMetadata[];
  /** spec block */
  readonly spec?: CsiDriverSpec[];
}
export interface CsiDriverMetadata {
  /** An unstructured key value map stored with the csi driver that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the csi driver. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the csi driver, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface CsiDriverSpec {
  /** Indicates if the CSI volume driver requires an attach operation */
  readonly attachRequired: boolean;
  /** Indicates that the CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations */
  readonly podInfoOnMount?: boolean;
  /** Defines what kind of volumes this CSI volume driver supports */
  readonly volumeLifecycleModes?: string[];
}

// Resource

export class CsiDriver extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CsiDriverConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_csi_driver',
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
  private _metadata: CsiDriverMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: CsiDriverMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: CsiDriverSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: CsiDriverSpec[] | undefined) {
    this._spec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      spec: this._spec,
    };
  }
}
