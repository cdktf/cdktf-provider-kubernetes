# `limitRangeV1` Submodule <a name="`limitRangeV1` Submodule" id="@cdktf/provider-kubernetes.limitRangeV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LimitRangeV1 <a name="LimitRangeV1" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1 kubernetes_limit_range_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.NewLimitRangeV1(scope Construct, id *string, config LimitRangeV1Config) LimitRangeV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config">LimitRangeV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config">LimitRangeV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putMetadata"></a>

```go
func PutMetadata(value LimitRangeV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putSpec"></a>

```go
func PutSpec(value LimitRangeV1Spec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetId"></a>

```go
func ResetId()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetSpec"></a>

```go
func ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LimitRangeV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.LimitRangeV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.LimitRangeV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.LimitRangeV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.LimitRangeV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LimitRangeV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LimitRangeV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LimitRangeV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LimitRangeV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference">LimitRangeV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference">LimitRangeV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadata"></a>

```go
func Metadata() LimitRangeV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference">LimitRangeV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.spec"></a>

```go
func Spec() LimitRangeV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference">LimitRangeV1SpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadataInput"></a>

```go
func MetadataInput() LimitRangeV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.specInput"></a>

```go
func SpecInput() LimitRangeV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LimitRangeV1Config <a name="LimitRangeV1Config" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

&limitrangev1.LimitRangeV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.limitRangeV1.LimitRangeV1Metadata,
	Id: *string,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.limitRangeV1.LimitRangeV1Spec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#id LimitRangeV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a></code> | spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.metadata"></a>

```go
Metadata LimitRangeV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#metadata LimitRangeV1#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#id LimitRangeV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.spec"></a>

```go
Spec LimitRangeV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#spec LimitRangeV1#spec}

---

### LimitRangeV1Metadata <a name="LimitRangeV1Metadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

&limitrangev1.LimitRangeV1Metadata {
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
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the limit range that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the limit range. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the limit range, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the limit range must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the limit range that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#annotations LimitRangeV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#generate_name LimitRangeV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the limit range.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#labels LimitRangeV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the limit range, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#name LimitRangeV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the limit range must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#namespace LimitRangeV1#namespace}

---

### LimitRangeV1Spec <a name="LimitRangeV1Spec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

&limitrangev1.LimitRangeV1Spec {
	Limit: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec.property.limit">Limit</a></code> | <code>interface{}</code> | limit block. |

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec.property.limit"></a>

```go
Limit interface{}
```

- *Type:* interface{}

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#limit LimitRangeV1#limit}

---

### LimitRangeV1SpecLimit <a name="LimitRangeV1SpecLimit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

&limitrangev1.LimitRangeV1SpecLimit {
	Default: *map[string]*string,
	DefaultRequest: *map[string]*string,
	Max: *map[string]*string,
	MaxLimitRequestRatio: *map[string]*string,
	Min: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.default">Default</a></code> | <code>*map[string]*string</code> | Default resource requirement limit value by resource name if resource limit is omitted. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.defaultRequest">DefaultRequest</a></code> | <code>*map[string]*string</code> | The default resource requirement request value by resource name if resource request is omitted. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.max">Max</a></code> | <code>*map[string]*string</code> | Max usage constraints on this kind by resource name. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.maxLimitRequestRatio">MaxLimitRequestRatio</a></code> | <code>*map[string]*string</code> | The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.min">Min</a></code> | <code>*map[string]*string</code> | Min usage constraints on this kind by resource name. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.type">Type</a></code> | <code>*string</code> | Type of resource that this limit applies to. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.default"></a>

```go
Default *map[string]*string
```

- *Type:* *map[string]*string

Default resource requirement limit value by resource name if resource limit is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#default LimitRangeV1#default}

---

##### `DefaultRequest`<sup>Optional</sup> <a name="DefaultRequest" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.defaultRequest"></a>

```go
DefaultRequest *map[string]*string
```

- *Type:* *map[string]*string

The default resource requirement request value by resource name if resource request is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#default_request LimitRangeV1#default_request}

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.max"></a>

```go
Max *map[string]*string
```

- *Type:* *map[string]*string

Max usage constraints on this kind by resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#max LimitRangeV1#max}

---

##### `MaxLimitRequestRatio`<sup>Optional</sup> <a name="MaxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.maxLimitRequestRatio"></a>

```go
MaxLimitRequestRatio *map[string]*string
```

- *Type:* *map[string]*string

The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value;

this represents the max burst for the named resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#max_limit_request_ratio LimitRangeV1#max_limit_request_ratio}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.min"></a>

```go
Min *map[string]*string
```

- *Type:* *map[string]*string

Min usage constraints on this kind by resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#min LimitRangeV1#min}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of resource that this limit applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/limit_range_v1#type LimitRangeV1#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LimitRangeV1MetadataOutputReference <a name="LimitRangeV1MetadataOutputReference" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.NewLimitRangeV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LimitRangeV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() LimitRangeV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

---


### LimitRangeV1SpecLimitList <a name="LimitRangeV1SpecLimitList" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.NewLimitRangeV1SpecLimitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LimitRangeV1SpecLimitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.get"></a>

```go
func Get(index *f64) LimitRangeV1SpecLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LimitRangeV1SpecLimitOutputReference <a name="LimitRangeV1SpecLimitOutputReference" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.NewLimitRangeV1SpecLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LimitRangeV1SpecLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefaultRequest">ResetDefaultRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMaxLimitRequestRatio">ResetMaxLimitRequestRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDefaultRequest` <a name="ResetDefaultRequest" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefaultRequest"></a>

```go
func ResetDefaultRequest()
```

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMaxLimitRequestRatio` <a name="ResetMaxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMaxLimitRequestRatio"></a>

```go
func ResetMaxLimitRequestRatio()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequestInput">DefaultRequestInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxInput">MaxInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatioInput">MaxLimitRequestRatioInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.minInput">MinInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.default">Default</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequest">DefaultRequest</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.max">Max</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatio">MaxLimitRequestRatio</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.min">Min</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultRequestInput`<sup>Optional</sup> <a name="DefaultRequestInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequestInput"></a>

```go
func DefaultRequestInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxInput"></a>

```go
func MaxInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxLimitRequestRatioInput`<sup>Optional</sup> <a name="MaxLimitRequestRatioInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatioInput"></a>

```go
func MaxLimitRequestRatioInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.minInput"></a>

```go
func MinInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.default"></a>

```go
func Default() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultRequest`<sup>Required</sup> <a name="DefaultRequest" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequest"></a>

```go
func DefaultRequest() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.max"></a>

```go
func Max() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxLimitRequestRatio`<sup>Required</sup> <a name="MaxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatio"></a>

```go
func MaxLimitRequestRatio() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.min"></a>

```go
func Min() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LimitRangeV1SpecOutputReference <a name="LimitRangeV1SpecOutputReference" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/limitrangev1"

limitrangev1.NewLimitRangeV1SpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LimitRangeV1SpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.putLimit"></a>

```go
func PutLimit(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.putLimit.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resetLimit"></a>

```go
func ResetLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList">LimitRangeV1SpecLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limitInput">LimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limit"></a>

```go
func Limit() LimitRangeV1SpecLimitList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList">LimitRangeV1SpecLimitList</a>

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limitInput"></a>

```go
func LimitInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.internalValue"></a>

```go
func InternalValue() LimitRangeV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

---



