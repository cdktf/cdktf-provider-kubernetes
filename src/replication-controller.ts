// generated from terraform resource schema

import { ReplicationControllerMetadata, 
replicationControllerMetadataToTerraform, 
ReplicationControllerMetadataOutputReference, 
ReplicationControllerSpec, 
replicationControllerSpecToTerraform, 
ReplicationControllerSpecOutputReference, 
ReplicationControllerTimeouts, 
replicationControllerTimeoutsToTerraform, 
ReplicationControllerTimeoutsOutputReference} from './replication-controller-structs'
export * from './replication-controller-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ReplicationControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/replication_controller#id ReplicationController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/replication_controller#metadata ReplicationController#metadata}
  */
  readonly metadata: ReplicationControllerMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/replication_controller#spec ReplicationController#spec}
  */
  readonly spec: ReplicationControllerSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/replication_controller#timeouts ReplicationController#timeouts}
  */
  readonly timeouts?: ReplicationControllerTimeouts;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/replication_controller kubernetes_replication_controller}
*/
export class ReplicationController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_replication_controller";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/replication_controller kubernetes_replication_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReplicationControllerConfig
  */
  public constructor(scope: Construct, id: string, config: ReplicationControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_replication_controller',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.12.1',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ReplicationControllerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ReplicationControllerMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new ReplicationControllerSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ReplicationControllerSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ReplicationControllerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ReplicationControllerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: replicationControllerMetadataToTerraform(this._metadata.internalValue),
      spec: replicationControllerSpecToTerraform(this._spec.internalValue),
      timeouts: replicationControllerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
