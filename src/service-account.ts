// https://www.terraform.io/docs/providers/kubernetes/r/service_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceAccountConfig extends TerraformMetaArguments {
  /** True to enable automatic mounting of the service account token */
  readonly automountServiceAccountToken?: boolean;
  /** image_pull_secret block */
  readonly imagePullSecret?: ServiceAccountImagePullSecret[];
  /** metadata block */
  readonly metadata: ServiceAccountMetadata[];
  /** secret block */
  readonly secret?: ServiceAccountSecret[];
  /** timeouts block */
  readonly timeouts?: ServiceAccountTimeouts;
}
export interface ServiceAccountImagePullSecret {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface ServiceAccountMetadata {
  /** An unstructured key value map stored with the service account that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the service account. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the service account, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the service account must be unique. */
  readonly namespace?: string;
}
export interface ServiceAccountSecret {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface ServiceAccountTimeouts {
  readonly create?: string;
}

// Resource

export class ServiceAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_service_account',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automountServiceAccountToken = config.automountServiceAccountToken;
    this._imagePullSecret = config.imagePullSecret;
    this._metadata = config.metadata;
    this._secret = config.secret;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean;
  public get automountServiceAccountToken() {
    return this._automountServiceAccountToken;
  }
  public set automountServiceAccountToken(value: boolean | undefined) {
    this._automountServiceAccountToken = value;
  }

  // default_secret_name - computed: true, optional: false, required: true
  public get defaultSecretName() {
    return this.getStringAttribute('default_secret_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: ServiceAccountImagePullSecret[];
  public get imagePullSecret() {
    return this._imagePullSecret;
  }
  public set imagePullSecret(value: ServiceAccountImagePullSecret[] | undefined) {
    this._imagePullSecret = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ServiceAccountMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: ServiceAccountMetadata[]) {
    this._metadata = value;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: ServiceAccountSecret[];
  public get secret() {
    return this._secret;
  }
  public set secret(value: ServiceAccountSecret[] | undefined) {
    this._secret = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServiceAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automount_service_account_token: this._automountServiceAccountToken,
      image_pull_secret: this._imagePullSecret,
      metadata: this._metadata,
      secret: this._secret,
      timeouts: this._timeouts,
    };
  }
}
