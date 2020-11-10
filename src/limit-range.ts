// https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LimitRangeConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: LimitRangeMetadata[];
  /** spec block */
  readonly spec?: LimitRangeSpec[];
}
export interface LimitRangeMetadata {
  /** An unstructured key value map stored with the limit range that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the limit range. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the limit range, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the limit range must be unique. */
  readonly namespace?: string;
}
export interface LimitRangeSpecLimit {
  /** Default resource requirement limit value by resource name if resource limit is omitted. */
  readonly default?: { [key: string]: string };
  /** The default resource requirement request value by resource name if resource request is omitted. */
  readonly defaultRequest?: { [key: string]: string };
  /** Max usage constraints on this kind by resource name. */
  readonly max?: { [key: string]: string };
  /** The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource. */
  readonly maxLimitRequestRatio?: { [key: string]: string };
  /** Min usage constraints on this kind by resource name. */
  readonly min?: { [key: string]: string };
  /** Type of resource that this limit applies to. */
  readonly type?: string;
}
export interface LimitRangeSpec {
  /** limit block */
  readonly limit?: LimitRangeSpecLimit[];
}

// Resource

export class LimitRange extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LimitRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_limit_range',
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: LimitRangeMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: LimitRangeMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: LimitRangeSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: LimitRangeSpec[] ) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
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
