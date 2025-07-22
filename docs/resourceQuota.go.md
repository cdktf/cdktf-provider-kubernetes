# `resourceQuota` Submodule <a name="`resourceQuota` Submodule" id="@cdktf/provider-kubernetes.resourceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceQuota <a name="ResourceQuota" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota kubernetes_resource_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.NewResourceQuota(scope Construct, id *string, config ResourceQuotaConfig) ResourceQuota
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig">ResourceQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig">ResourceQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata"></a>

```go
func PutMetadata(value ResourceQuotaMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec"></a>

```go
func PutSpec(value ResourceQuotaSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts"></a>

```go
func PutTimeouts(value ResourceQuotaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetId"></a>

```go
func ResetId()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.ResourceQuota_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.ResourceQuota_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.ResourceQuota_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.ResourceQuota_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourceQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference">ResourceQuotaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference">ResourceQuotaSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference">ResourceQuotaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadata"></a>

```go
func Metadata() ResourceQuotaMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference">ResourceQuotaMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.spec"></a>

```go
func Spec() ResourceQuotaSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference">ResourceQuotaSpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeouts"></a>

```go
func Timeouts() ResourceQuotaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference">ResourceQuotaTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadataInput"></a>

```go
func MetadataInput() ResourceQuotaMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.specInput"></a>

```go
func SpecInput() ResourceQuotaSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceQuotaConfig <a name="ResourceQuotaConfig" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

&resourcequota.ResourceQuotaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.resourceQuota.ResourceQuotaMetadata,
	Id: *string,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.resourceQuota.ResourceQuotaSpec,
	Timeouts: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.resourceQuota.ResourceQuotaTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#id ResourceQuota#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.metadata"></a>

```go
Metadata ResourceQuotaMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#metadata ResourceQuota#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#id ResourceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.spec"></a>

```go
Spec ResourceQuotaSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#spec ResourceQuota#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.timeouts"></a>

```go
Timeouts ResourceQuotaTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#timeouts ResourceQuota#timeouts}

---

### ResourceQuotaMetadata <a name="ResourceQuotaMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

&resourcequota.ResourceQuotaMetadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.name">Name</a></code> | <code>*string</code> | Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the resource quota must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#annotations ResourceQuota#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#generate_name ResourceQuota#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#labels ResourceQuota#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#name ResourceQuota#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the resource quota must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#namespace ResourceQuota#namespace}

---

### ResourceQuotaSpec <a name="ResourceQuotaSpec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

&resourcequota.ResourceQuotaSpec {
	Hard: *map[string]*string,
	Scopes: *[]*string,
	ScopeSelector: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.resourceQuota.ResourceQuotaSpecScopeSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.hard">Hard</a></code> | <code>*map[string]*string</code> | The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopes">Scopes</a></code> | <code>*[]*string</code> | A collection of filters that must match each object tracked by a quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopeSelector">ScopeSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | scope_selector block. |

---

##### `Hard`<sup>Optional</sup> <a name="Hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.hard"></a>

```go
Hard *map[string]*string
```

- *Type:* *map[string]*string

The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#hard ResourceQuota#hard}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

A collection of filters that must match each object tracked by a quota.

If not specified, the quota matches all objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#scopes ResourceQuota#scopes}

---

##### `ScopeSelector`<sup>Optional</sup> <a name="ScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopeSelector"></a>

```go
ScopeSelector ResourceQuotaSpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

scope_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#scope_selector ResourceQuota#scope_selector}

---

### ResourceQuotaSpecScopeSelector <a name="ResourceQuotaSpecScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

&resourcequota.ResourceQuotaSpecScopeSelector {
	MatchExpression: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.property.matchExpression">MatchExpression</a></code> | <code>interface{}</code> | match_expression block. |

---

##### `MatchExpression`<sup>Optional</sup> <a name="MatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.property.matchExpression"></a>

```go
MatchExpression interface{}
```

- *Type:* interface{}

match_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#match_expression ResourceQuota#match_expression}

---

### ResourceQuotaSpecScopeSelectorMatchExpression <a name="ResourceQuotaSpecScopeSelectorMatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

&resourcequota.ResourceQuotaSpecScopeSelectorMatchExpression {
	Operator: *string,
	ScopeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.operator">Operator</a></code> | <code>*string</code> | Represents a scope's relationship to a set of values. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.scopeName">ScopeName</a></code> | <code>*string</code> | The name of the scope that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.values">Values</a></code> | <code>*[]*string</code> | A list of scope selector requirements by scope of the resources. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Represents a scope's relationship to a set of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#operator ResourceQuota#operator}

---

##### `ScopeName`<sup>Required</sup> <a name="ScopeName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.scopeName"></a>

```go
ScopeName *string
```

- *Type:* *string

The name of the scope that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#scope_name ResourceQuota#scope_name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of scope selector requirements by scope of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#values ResourceQuota#values}

---

### ResourceQuotaTimeouts <a name="ResourceQuotaTimeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

&resourcequota.ResourceQuotaTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#create ResourceQuota#create}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#update ResourceQuota#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#create ResourceQuota#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/resource_quota#update ResourceQuota#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceQuotaMetadataOutputReference <a name="ResourceQuotaMetadataOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.NewResourceQuotaMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceQuotaMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceQuotaMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---


### ResourceQuotaSpecOutputReference <a name="ResourceQuotaSpecOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.NewResourceQuotaSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceQuotaSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector">PutScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetHard">ResetHard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopeSelector">ResetScopeSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScopeSelector` <a name="PutScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector"></a>

```go
func PutScopeSelector(value ResourceQuotaSpecScopeSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---

##### `ResetHard` <a name="ResetHard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetHard"></a>

```go
func ResetHard()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetScopeSelector` <a name="ResetScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopeSelector"></a>

```go
func ResetScopeSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelector">ScopeSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference">ResourceQuotaSpecScopeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hardInput">HardInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelectorInput">ScopeSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hard">Hard</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeSelector`<sup>Required</sup> <a name="ScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelector"></a>

```go
func ScopeSelector() ResourceQuotaSpecScopeSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference">ResourceQuotaSpecScopeSelectorOutputReference</a>

---

##### `HardInput`<sup>Optional</sup> <a name="HardInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hardInput"></a>

```go
func HardInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ScopeSelectorInput`<sup>Optional</sup> <a name="ScopeSelectorInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelectorInput"></a>

```go
func ScopeSelectorInput() ResourceQuotaSpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Hard`<sup>Required</sup> <a name="Hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hard"></a>

```go
func Hard() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceQuotaSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---


### ResourceQuotaSpecScopeSelectorMatchExpressionList <a name="ResourceQuotaSpecScopeSelectorMatchExpressionList" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.NewResourceQuotaSpecScopeSelectorMatchExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourceQuotaSpecScopeSelectorMatchExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get"></a>

```go
func Get(index *f64) ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference <a name="ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.NewResourceQuotaSpecScopeSelectorMatchExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput">ScopeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeName">ScopeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ScopeNameInput`<sup>Optional</sup> <a name="ScopeNameInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput"></a>

```go
func ScopeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `ScopeName`<sup>Required</sup> <a name="ScopeName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeName"></a>

```go
func ScopeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceQuotaSpecScopeSelectorOutputReference <a name="ResourceQuotaSpecScopeSelectorOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.NewResourceQuotaSpecScopeSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceQuotaSpecScopeSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression">PutMatchExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resetMatchExpression">ResetMatchExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpression` <a name="PutMatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression"></a>

```go
func PutMatchExpression(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpression` <a name="ResetMatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resetMatchExpression"></a>

```go
func ResetMatchExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpression">MatchExpression</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList">ResourceQuotaSpecScopeSelectorMatchExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpressionInput">MatchExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpression`<sup>Required</sup> <a name="MatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpression"></a>

```go
func MatchExpression() ResourceQuotaSpecScopeSelectorMatchExpressionList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList">ResourceQuotaSpecScopeSelectorMatchExpressionList</a>

---

##### `MatchExpressionInput`<sup>Optional</sup> <a name="MatchExpressionInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpressionInput"></a>

```go
func MatchExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceQuotaSpecScopeSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---


### ResourceQuotaTimeoutsOutputReference <a name="ResourceQuotaTimeoutsOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/resourcequota"

resourcequota.NewResourceQuotaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceQuotaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



